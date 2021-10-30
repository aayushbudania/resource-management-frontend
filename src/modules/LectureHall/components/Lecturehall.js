export default function Lecturehall(props) {
  function deleteHandler() {

  }

  return (
    <>
      <div className="flex mb-4 items-center" background= "#26A9E1">
        <p className="w-full text-grey-darkest">{props.text}</p>
        <button className="flex-no-shrink p-2 ml-2 border-2 rounded text-red border-red hover:text-white hover:bg-red" onClick={deleteHandler}>Remove</button>
      </div>
    </>
  );
}

