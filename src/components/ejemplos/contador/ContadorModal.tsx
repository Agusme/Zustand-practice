import { FaRegTrashCan } from "react-icons/fa6"
import { useCounterStore } from "../../../store/ContadorStore"
import { Link } from "react-router-dom"

export default function ContadorModal() {

  const {count, increase, decrease, reset}= useCounterStore()

  return (
    <div>
     <h2 className="mt-3 mb-6">Demo</h2>
   <div className="bg-[#05B5CC] p-6 rounded-xl shadow-lg max-w-sm mx-auto">
  <div className="flex items-center justify-center gap-6">
    <button 
      className="bg-pink-500 hover:bg-pink-600 text-white font-bold w-12 h-12 flex items-center justify-center rounded-lg" 
      onClick={decrease}
    >
      -
    </button>

    <p className="text-3xl font-mono font-bold text-white w-12 text-center">
      {count}
    </p>

    <button 
      className="bg-pink-500 hover:bg-pink-600 text-white font-bold w-12 h-12 flex items-center justify-center rounded-lg" 
      onClick={increase}
    >
      +
    </button>
  </div>

  <div className="flex justify-center mt-6">
    <button 
      className="bg-pink-500 hover:bg-pink-600 text-white w-12 h-12 flex items-center justify-center rounded-full" 
      onClick={reset}
    >
      <FaRegTrashCan />
    </button>
  </div>
</div>
   <div className="flex justify-center mt-4">
        <Link to='/contador-ejemplo'>
          <button className=" btn bg-[#fbae08] hover:bg-[#cb8c03] rounded-full  text-white px-6 py-2 border-none ">
            Ver explicación con código
          </button>
        </Link>
      </div>

    </div>
  )
}
