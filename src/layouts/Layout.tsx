import {ReactNode} from "react";

interface LayoutProps {
  children: ReactNode
}

const Layout = ({children}: LayoutProps) => {
  return (
    <>
      <div>
        <h1>Header</h1>
      </div>
      <div>
        {children}
      </div>
      <div>
        <h1>Footer</h1>
      </div>
    </>
  )
}

export default Layout