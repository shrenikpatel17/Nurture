'use client';
import Image from "next/image"
import userpic from '../../../public/user.png'
import community from '../../../public/community.png'
import ingredients from '../../../public/ingredients.png'
import recipes from '../../../public/recipes.png'
import Link from "next/link";

const NavBarComponent = () => {
return (
    // <div className="w-1/3 bg-med-red rounded-3xl absolute top-12 p-2 right-4">
    //   <div className="flex justify-center items-center">
    //     <div className="flex-row flex space-x-4 text-maroon">
    //         <span className="bg-white rounded-3xl p-2">
    //             <div className="font-CBYG text-lg">Essentials</div>
    //         </span>
    //         <span className="bg-white rounded-3xl p-2">
    //             <div className="font-CBYG text-lg">Ingredients</div>
    //         </span>
    //         <span className="bg-white rounded-3xl p-2">
    //             <div className="font-CBYG text-lg">Recipes</div>
    //         </span>
    //         <span className="bg-white rounded-3xl p-2">
    //             <div className="font-CBYG text-lg">Chat</div>
    //         </span>
    //     </div>
    //     {/* <ul className="text-maroon">
    //       <li><a>Item 1</a></li>
    //       <li><a>Item 3</a></li>
    //     </ul> */}
    //   </div>
    // </div>


<div className=" bg-transparent  absolute top-4 p-2 right-4">
      <div className="bg-med-red rounded-3xl">
        <div className="flex-row flex space-x-4 text-maroon">
            <span className="hover:bg-white rounded-3xl p-2">
              <Link href="/dashboard">
                <Image src={userpic} width={50} height={50}></Image>
              </Link>
            </span>
            <span className="hover:bg-white rounded-3xl p-2">
            <Link href="/ingredients">
                <Image src={ingredients} width={50} height={50}></Image>
              </Link>
            </span>
            <span className="hover:bg-white rounded-3xl p-2">
            <Link href="/recipe">
                <Image src={recipes} width={50} height={50}></Image>
              </Link >
            </span>
            <span className="hover:bg-white rounded-3xl p-2">
            <Link href="/chat">
                <Image src={community} width={50} height={50}></Image>
              </Link >
            </span>
        </div>
        {/* <ul className="text-maroon">
          <li><a>Item 1</a></li>
          <li><a>Item 3</a></li>
        </ul> */}
      </div>
    </div>
)
}

export default NavBarComponent