import React, { useState } from 'react'

function Sidebar() {
    const [isSidebarOpen,setisSidebarOpen]= useState(false)
    return (
        <div className="flex h-full relative bg-gradient-to-tr from-gray-50 to-gray-100 dark:bg-slate-950 dark:bg-none">
          <div
            className={`transition-all duration-300 ease-in-out ${isSidebarOpen ? "md:w-80 xl:w-1/4" : "md:w-10"} ${isSidebarOpen ? "" : "flex justify-center items-center"}`}
            // style={{ width: isSidebarOpen ? '20rem' : '2.5rem' }} // Explicit width for testing
          >
            {isSidebarOpen ? (
              <div className="flex justify-center items-center relative ">
                <div className="w-0 md:w-full flex-1 md:border bg-white dark:bg-slate-950 bg-opacity-80 backdrop-blur-sm md:border-slate-300 md:dark:border-none md:m-3 md:shadow-xl transform transition-all md:rounded-xl duration-300 ease-in-out overflow-hidden md:mr-2 max-h-[calc(100vh-85px)] min-h-[calc(100vh-85px)]">
            tyuiop
                </div>
              </div>
            ) : (
              <div
                // onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                className=" top-1/2 z-50 hidden rounded-full md:inline-flex cursor-pointer "
              >
                {/* <IconChevronsLeft
                  stroke={1.5}
                  className={`h-5 w-5 rotate-180 opacity-70 hover:opacity-100`}
                /> */}
              </div>
            )}
          </div>
          <div className="flex flex-col justify-center md:my-3 md:mr-3 w-full min-h-[calc(100vh-60px)] md:max-h-[calc(100vh-85px)] md:min-h-[calc(100vh-85px)] relative ">
            <div
              className={`h-full ${isSidebarOpen ? "w-full" : "md:max-w-[80vw]"}  md:border bg-opacity-80 backdrop-blur-sm container md:border-slate-300 md:dark:border-slate-700 md:rounded-xl md:shadow-xl bg-white dark:bg-slate-950`}
            >
              <div className="flex flex-col  max-h-[calc(100vh-100px)]">

                
                  
                    </div>
                    {/* </ScrollArea> */}
                 
                
              </div>
            </div>
          </div>
        // </div>
      );
    
}

export default Sidebar