"use client"

import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!e.target.firstName.value || !e.target.lastName.value || !e.target.email.value || !e.target.password.value) {
      return "All fields are required";
    }
 
    try {
      const res = await fetch("api/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          firstName: e.target.firstName.value,
          lastName: e.target.lastName.value,
          email: e.target.email.value,
          password: e.target.password.value,
        }),
      });

      if (res.ok) {
        const form = e.target;
        form.reset();
        router.push("/login");
      } else {
        console.log("User registration failed.");
      }
    } catch (error) {
      console.log("Error during registration: ", error);
    }
  };

  return (
    <>
    <div className="mt-6">
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 items-center">
      <div className="w-10/12 bg-white shadow-lg border border-transparent rounded-3xl max-w-sm p-10 sm:p-10 lg:p-12 dark:bg-white dark:border-transparent">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h1 className="text-xl text-center">nurture</h1>
          <h2 className="mt-5 text-center text-2xl leading-9 text-black">
            Create your account
          </h2>
        </div>

        <div className="mt-5 sm:mx-auto sm:w-full sm:max-w-sm flex-shrink-0">
          <form onSubmit={handleSubmit} className="space-y-6" action="#" method="POST">
          <div>
              <label htmlFor="email" className="-mt-2 block text-sm leading-6 text-dark-gray">
                First Name 
              </label>
              <div className="">
                <input
                  id="firstName"
                  name="firstName"
                  required
                  className="block w-full rounded-2xl border-0 py-1.5 text-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-light-gray focus:ring-2 focus:ring-inset focus:ring-blue sm:text-sm sm:leading-6 hover:bg-blue"
                />
              </div>
          </div>
          <div>
              <label htmlFor="email" className="-mt-2 block text-sm font-biscuitReg leading-6 text-dark-gray">
                Last Name 
              </label>
              <div>
                <input
                  id="lastName"
                  name="lastName"
                  required
                  className="font-biscuitReg block w-full rounded-2xl border-0 py-1.5 text-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-light-gray focus:ring-2 focus:ring-inset focus:ring-blue sm:text-sm sm:leading-6 hover:bg-blue"
                />
              </div>
          </div>
            <div>
              <label htmlFor="email" className="-mt-2 block text-sm font-biscuitReg leading-6 text-dark-gray">
                Email 
              </label>
              <div>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="font-biscuitReg block w-full rounded-2xl border-0 py-1.5 text-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-light-gray focus:ring-2 focus:ring-inset focus:ring-blue sm:text-sm sm:leading-6 hover:bg-blue"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="-mt-2 block text-sm font-biscuitReg leading-6 text-dark-gray">
                  Password
                </label>
              </div>
              <div>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="font-biscuitReg block w-full rounded-2xl border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue sm:text-sm sm:leading-6 hover:bg-blue"
                />
              </div>
            </div>

            <div>
              <label htmlFor="weeksIn" className="-mt-2 block text-sm font-biscuitReg leading-6 text-dark-gray">
                Weeks Into Pregnancy 
              </label>
              <div>
                <input
                  id="weeksIn"
                  name="weeksIn"
                  type="number"
                  required
                  className="font-biscuitReg block w-full rounded-2xl border-0 py-1.5 text-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-light-gray focus:ring-2 focus:ring-inset focus:ring-blue sm:text-sm sm:leading-6 hover:bg-blue"
                />
              </div>
            </div>

            <div>
              <label htmlFor="allergies" className="-mt-2 block text-sm font-biscuitReg leading-6 text-dark-gray">
                Allergies 
              </label>
              <div
                  id="allergies"
                  name="allergies"
                  type="checkbox"
                  required
                  className="font-biscuitReg block w-full rounded-2xl border-0 py-1.5 text-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-light-gray focus:ring-2 focus:ring-inset focus:ring-blue sm:text-sm sm:leading-6 hover:bg-blue">

                <div>
                  <input type="checkbox" id="milk" name="milk" />
                  <label for="milk">Milk</label>
                </div>
                <div>
                  <input type="checkbox" id="egg" name="egg" />
                  <label for="egg">Egg</label>
                </div>
                <div>
                  <input type="checkbox" id="fish" name="fish" />
                  <label for="fish">Fish</label>
                </div>
                <div>
                  <input type="checkbox" id="shellfish" name="shellfish" />
                  <label for="shellfish">Shellfish</label>
                </div>
                <div>
                  <input type="checkbox" id="treeNuts" name="treeNuts" />
                  <label for="treeNuts">Tree Nuts</label>
                </div>
                <div>
                  <input type="checkbox" id="peanuts" name="peanuts" />
                  <label for="peanuts">Peanuts</label>
                </div><div>
                  <input type="checkbox" id="wheat" name="wheat" />
                  <label for="wheat">Wheat</label>
                </div><div>
                  <input type="checkbox" id="soybeans" name="soybeans" />
                  <label for="soybeans">Soybeans</label>
                </div>
              </div>
            </div>

            <div>
              <label htmlFor="diet" className="-mt-2 block text-sm font-biscuitReg leading-6 text-dark-gray">
                Diet 
              </label>
              <div>
              <select name="diet" id="diet">
                <option value="noRestrictions">No Restrictions</option>
                <option value="vegetarian">Vegetarian</option>
                <option value="vegan">Vegan</option>
                <option value="lactoseIntolerant">Lactose-Intolerant</option>
              </select>
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-2xl bg-black px-3 py-1.5 text-sm font-biscuitMed leading-6 text-white shadow-sm hover:bg-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Sign up
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-dark-gray font-biscuitReg">
            Already have an account?{' '}
            <a href="/login" className="font-biscuitMed leading-6 text-dark-gray hover:text-black">
              Login
            </a>
          </p>
        </div>
        </div>
      </div>
      </div>
    </>
  )
}