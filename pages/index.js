import Head from 'next/head'

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2
    bg-gray-100 dark:bg-gray-700">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-center
      w-full flex-1 px-20">
        <div className="bg-white dark:bg-gray-800 w-full lg:w-1/3 mx-auto 
        rounded px-4 py-4 shadow-lg">
          <div className="text-center m-4">
            <h1 className="my-3 text-3xl font-semibold text-gray-700
            dark:text-white">Login</h1>
            <p className="text-gray-500 dark:text-white">Log in to access your account</p>
          </div>
          <input type='text' placeholder="Email"
            className="w-full mb-3 px-4 py-3 border rounded dark:placeholder-white
            focus:border-blue-500 dark:bg-transparent" />
          <input type='text' placeholder="Password"
            className="w-full mb-3 px-4 py-3 border rounded dark:placeholder-white
            focus:border-blue-500 dark:bg-transparent" />
          <div className="flex justify-center my-4">
            <a className="text-blue-500 text-sm" href="#">Forgot password?</a>
          </div>
          <hr />
          <div className="flex justify-center my-6">
            <button className="text-white text-center 
            cursor-pointer w-full bg-blue-500 rounded p-4">Log In</button>
          </div>
        </div>
      </main>
    </div>
  )
}
