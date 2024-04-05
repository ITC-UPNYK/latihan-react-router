import { Outlet } from "react-router-dom"

export const UserLayouts = () => {
  return (
    <div className="user-layout h-screen bg-indigo-600 text-white">
        <h2 className="text-4xl font-bold mb-4">Users</h2>
        <p className="text-lg mb-8">Lorem ipsum dolor sit amet.</p>
        
        <div className="mt-5 bg-indigo-600">
            <Outlet />
        </div>
    </div>
  )
}
