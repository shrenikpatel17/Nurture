'use client';

const NavBarComponent = () => {
return (
    <div className="w-1/3 bg-med-red rounded-3xl absolute top-12 p-2 right-4">
      <div className="flex justify-center items-center">
        <div className="flex-row flex space-x-4 text-maroon">
            <span className="bg-white rounded-3xl p-2">
                <div className="font-Jua text-lg">Essentials</div>
            </span>
            <span className="bg-white rounded-3xl p-2">
                <div className="font-CBYG text-lg">Ingredients</div>
            </span>
            <span className="bg-white rounded-3xl p-2">
                <div className="font-CBYG text-lg">Recipes</div>
            </span>
            <span className="bg-white rounded-3xl p-2">
                <div className="font-Jua text-lg">Chat</div>
            </span>
            {/* <div>Ingredients</div>
            <div>Recipes</div>
            <div>Chat</div> */}

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