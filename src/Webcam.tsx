import React from "react";
import Webcam from "react-webcam";
import Crosshairs from "./img/crosshairs.png";

function AlignmentWebcam() {
  const [deviceId, setDeviceId] = React.useState<false | ConstrainDOMString>(
    false
  );
  const [devices, setDevices] = React.useState<MediaDeviceInfo[]>([]);

  const handleDevices = React.useCallback(
    (mediaDevices: MediaDeviceInfo[]) =>
      setDevices(mediaDevices.filter(({ kind }) => kind === "videoinput")),
    [setDevices]
  );

  React.useEffect(() => {
    navigator.mediaDevices.enumerateDevices().then(handleDevices);
  }, [handleDevices]);

  return (
    <>
      <div className="col-span-12">
        <label
          className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
          htmlFor="device"
        >
          Select a Webcam
        </label>
        <div className="relative">
          <select
            className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="device"
            onChange={(e) => setDeviceId(e.target.value)}
          >
            {!deviceId && <option>Select a Device</option>}
            {devices.map((device, key) => (
              <option value={device.deviceId}>
                {device.label || `Device ${key + 1}`}
              </option>
            ))}
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
            <svg
              className="fill-current h-4 w-4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
            </svg>
          </div>
        </div>
      </div>
      <div className="col-span-12 grid pt-4">
        {deviceId && (
          <>
            <Webcam
              className="w-full object-fill row-start-1 col-start-1 row-end-1 col-end-1"
              videoConstraints={{ deviceId }}
            />
            <img
              src={Crosshairs}
              className="mx-auto my-auto row-start-1 col-start-1 row-end-1 col-end-1 h-48 w-48"
            />
          </>
        )}
      </div>
    </>
  );
}

export default AlignmentWebcam;
