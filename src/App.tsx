import Webcam from "./Webcam";

function App() {
  return (
    <div className="grid grid-cols-12 gap-4 m-4">
      <div className="col-span-12">
        <h1 className="text-xl font-bold">Webcam Aligntment Tool</h1>
      </div>
      <div className="grid col-span-8 grid-cols-12">
        <Webcam />
      </div>
      <div className="col-span-4">
        <h3 className="text-xl font-bold mb-6">Guide</h3>
        <p>
          This is a small utility you can use to help align a toolchanging
          printer using a micrscopic webcam ( or possibly others. )
        </p>
        <p>
          It is recommended to start with a offset of{" "}
          <pre className="inline">X0 Y0</pre> otherwise you will have to do some
          additional math.
        </p>

        <h3 className="text-xl font-bold mt-16 mb-6">Step 1</h3>
        <p>
          In order to use this to align your tools, you must start by setting a
          control point. For example, with a Jubilee Tool Changer, you should
          use the center of the Z endstop switch by placing it in the center of
          the crosshairs.
        </p>

        <div className="col-span-12 mt-8">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="control-x"
          >
            ControlPoint
          </label>
          <div className="relative flex flex-row">
            <div className="col-span-1 text-right self-center p-4 font-bold">
              X
            </div>
            <input
              type="text"
              className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500 flex-grow"
              placeholder="0"
            />
            <div className="col-span-1 text-right self-center  p-4 font-bold">
              Y
            </div>
            <input
              type="text"
              className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500 flex-grow"
              placeholder="0"
            />
          </div>
        </div>

        <h3 className="text-xl font-bold mt-16 mb-6">Step 2</h3>
        <p>
          Next you should pick up each tool and jog them so that the center of
          the nozzle is centered in the crosshairs.
        </p>

        <div className="col-span-12 mb-8 mt-8">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="control-x"
          >
            Tool 1
          </label>
          <div className="relative flex flex-row">
            <div className="col-span-1 text-right self-center p-4 font-bold">
              X
            </div>
            <input
              type="text"
              className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500 flex-grow"
              placeholder="0"
            />
            <div className="col-span-1 text-right self-center  p-4 font-bold">
              Y
            </div>
            <input
              type="text"
              className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500 flex-grow"
              placeholder="0"
            />
          </div>
        </div>

        <div className="col-span-12 mb-8">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="control-x"
          >
            Tool 2
          </label>
          <div className="relative flex flex-row">
            <div className="col-span-1 text-right self-center p-4 font-bold">
              X
            </div>
            <input
              type="text"
              className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500 flex-grow"
              placeholder="0"
            />
            <div className="col-span-1 text-right self-center  p-4 font-bold">
              Y
            </div>
            <input
              type="text"
              className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500 flex-grow"
              placeholder="0"
            />
          </div>
        </div>

        <div className="col-span-12 mb-8">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="control-x"
          >
            Tool 3
          </label>
          <div className="relative flex flex-row">
            <div className="col-span-1 text-right self-center p-4 font-bold">
              X
            </div>
            <input
              type="text"
              className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500 flex-grow"
              placeholder="0"
            />
            <div className="col-span-1 text-right self-center  p-4 font-bold">
              Y
            </div>
            <input
              type="text"
              className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500 flex-grow"
              placeholder="0"
            />
          </div>
        </div>

        <div className="col-span-12">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="control-x"
          >
            Tool 4
          </label>
          <div className="relative flex flex-row">
            <div className="col-span-1 text-right self-center p-4 font-bold">
              X
            </div>
            <input
              type="text"
              className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500 flex-grow"
              placeholder="0"
            />
            <div className="col-span-1 text-right self-center  p-4 font-bold">
              Y
            </div>
            <input
              type="text"
              className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500 flex-grow"
              placeholder="0"
            />
          </div>
        </div>

        <h3 className="text-xl font-bold mt-16 mb-6">Step 3</h3>
        <p>
          Its now time to calculate the tool offsets. The math is pretty simple
          as long as the tool offsets were set to 0 prior to alignment.
        </p>

        <p>To calculate the tool offset, you should use the formula below...</p>

        <pre className="my-6">
          Tool Offset X = Control Point X - Tool Offset X
        </pre>

        <pre className="my-6">
          Tool Offset X = Control Point X - Tool Offset X
        </pre>
      </div>
    </div>
  );
}

export default App;
