'use client'
import { AwaitedReactNode, JSXElementConstructor, Key, ReactElement, ReactNode, ReactPortal, useState } from "react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"
// import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { ChevronDown, ChevronUp, ChevronsUpDown } from "lucide-react"
import { SearchIcon } from "./ui/Icon"
import data from './stafflist.json'

type SortKey = 'name' | 'role' | 'department' | 'email'

export default function Stafflist() {
  const [sortKey, setSortKey] = useState<SortKey>('name')
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc')
  const [search, setSearch] = useState("")
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 10
  const staffMembers = data


  const sortedAndFilteredStaff = staffMembers
    .filter((staff: {name: String, role: String, department: String, email: String}) => 
      staff.name.toLowerCase().includes(search.toLowerCase()) ||
      staff.role.toLowerCase().includes(search.toLowerCase()) ||
      staff.department.toLowerCase().includes(search.toLowerCase()) ||
      staff.email.toLowerCase().includes(search.toLowerCase())
    )
    .sort((a, b) => {
      if (a[sortKey] < b[sortKey]) return sortOrder === 'asc' ? -1 : 1
      if (a[sortKey] > b[sortKey]) return sortOrder === 'asc' ? 1 : -1
      return 0
    })

  const totalPages = Math.ceil(sortedAndFilteredStaff.length / itemsPerPage)
  const paginatedStaff = sortedAndFilteredStaff.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  )

  const handleSort = (key: SortKey) => {
    if (key === sortKey) {
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc')
    } else {
      setSortKey(key)
      setSortOrder('asc')
    }
  }

  const SortIcon = ({ columnKey }: { columnKey: SortKey }) => {
    if (columnKey === sortKey) {
      return sortOrder === 'asc' ? <ChevronUp className="ml-2 h-4 w-4" /> : <ChevronDown className="ml-2 h-4 w-4" />
    }
    return <ChevronsUpDown className="ml-2 h-4 w-4" />
  }

  return (
    <div className="w-full max-w-6xl">
      <div className="flex justify-between items-center mb-4">
        <div className="searchBar flex rounded-lg w-full px-3.5 py-2.5 items-center border">
          <SearchIcon />
          <input
            placeholder="Search staff..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="h-5 pl-2 focus:outline-transparent border-none"
          />
        </div>
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[80px]">Avatar</TableHead>
            <TableHead onClick={() => handleSort('name')} className="cursor-pointer">
              Name <SortIcon columnKey="name" />
            </TableHead>
            <TableHead onClick={() => handleSort('role')} className="cursor-pointer">
              Role <SortIcon columnKey="role" />
            </TableHead>
            <TableHead onClick={() => handleSort('department')} className="cursor-pointer">
              Department <SortIcon columnKey="department" />
            </TableHead>
            <TableHead onClick={() => handleSort('email')} className="cursor-pointer">
              Email <SortIcon columnKey="email" />
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {paginatedStaff.map((staff: { id: Key | null | undefined; image: string | undefined; name: string | number | bigint | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | Promise<AwaitedReactNode> | null | undefined; role: string | number | bigint | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<AwaitedReactNode> | null | undefined; department: string | number | bigint | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<AwaitedReactNode> | null | undefined; email: string | number | bigint | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<AwaitedReactNode> | null | undefined }) => (
            <TableRow key={staff.id}>
              <TableCell>
                <Avatar>
                  <AvatarImage src={staff.image} alt={staff.name} />
                  <AvatarFallback>{staff.name.split(' ').map((n: any[]) => n[0]).join('')}</AvatarFallback>
                </Avatar>
              </TableCell>
              <TableCell className="font-medium">{staff.name}</TableCell>
              <TableCell>
                <Badge variant="secondary">{staff.role}</Badge>
              </TableCell>
              <TableCell>{staff.department}</TableCell>
              <TableCell>{staff.email}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className="flex justify-between items-center mt-4">
        <div>
          Showing {((currentPage - 1) * itemsPerPage) + 1} to {Math.min(currentPage * itemsPerPage, sortedAndFilteredStaff.length)} of {sortedAndFilteredStaff.length} entries
        </div>
        <div className="space-x-2">
          <Button
            onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            variant="outline"
          >
            Previous
          </Button>
          <Button
            onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
            disabled={currentPage === totalPages}
            variant="outline"
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  )
}