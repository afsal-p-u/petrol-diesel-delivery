import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import View from "./View";

const Orders = () => {
  const [data, setData] = useState(null);
  const [showView, setShowView] = useState(null)

  useEffect(() => {
    const getAllInCompleteOrders = () => {
      axios.get(`${import.meta.env.VITE_SERVER_URL}/order/uncompleted`)
        .then((res) => {
          setData(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    getAllInCompleteOrders();
  }, [showView]);

  const handleCompleted = (e, id) => {
    e.preventDefault()
    axios.put(`${import.meta.env.VITE_SERVER_URL}/order/${id}`, { status: "completed" }).then((res) => {
        window.location.reload()
    }).catch((err) => {
        console.log(err);
    });
  }

  const _setShowView = (value) => {
    setShowView(value)
  }


  return (
    <>
      <div className="w-[50%] h-[100%] bg-gray-200">
        <h3 className="text-center text-[19px] my-[10px] font-semibold">
          All Orders
        </h3>
        <div className="px-[40px] flex flex-col gap-3">
            {data?.map((item, i) => (
                <div className="flex bg-gray-300 py-[8px] px-[10px] justify-between rounded-md" key={item._id}>
                    <div className="flex items-center">
                        <small className="text-[14px]">{i + 1}.</small>
                        <p className="text-[13px] ml-1 font-medium">{item._id}</p>
                        <p className="text-[13px] ml-2 font-semibold text-yellow-500">
                            {item.status}
                        </p>
                    </div>
                    <div className="">
                        <button 
                            className="py-[5px] px-[15px] rounded-md bg-blue-500 text-[13px] mr-3 font-medium"
                            onClick={() => setShowView(item)}
                        >
                            View
                        </button>
                        <button 
                            className="py-[5px] px-[15px] rounded-md bg-green-500 text-[13px] mr-3 font-medium"
                            onClick={(e) => handleCompleted(e, item._id)}
                        >
                            Mark Completed
                        </button>
                    </div>
                </div>
            ))}
        </div>
      </div>

      {showView && (
        <View items={showView} setShowView={_setShowView} />
      )}
    </>
  );
};

export default Orders;
