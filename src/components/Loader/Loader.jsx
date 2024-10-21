import { FidgetSpinner } from "react-loader-spinner";
export default function Loader() {
  render(
    <div>
      <FidgetSpinner
        visible={true}
        height="80"
        width="80"
        ariaLabel="fidget-spinner-loading"
        wrapperStyle={{}}
        wrapperClass="fidget-spinner-wrapper"
      />
    </div>
  );
}
