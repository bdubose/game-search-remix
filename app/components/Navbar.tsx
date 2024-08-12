import { Link } from "@remix-run/react"
import { GameSearch } from "./game/search/GameSearch"

export const Navbar = () => {
    return (
        <nav className="dark:text-white w-full flex justify-between p-3 size-12">
            <h1 className="text-xl">
                <Link to='/'>
                    Games List Remixed!!!
                </Link>
            </h1>
            <GameSearch/>
        </nav>
    )
}