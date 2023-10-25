import TodoAction from '@/constant/TodoActions';
import DateString from '@/utils/DateString';
import React from 'react'


export const Todo= () => {
  return (
    <div className="flex items-center justify-between p-2 bg-gray-100 rounded relative">
            <div className="flex flex-col flex-1">
              <h1 className="font-bold text-sm">Todo1</h1>
              <p className="text-[10px] text-gray-400">
                {DateString()}
              </p>
            </div>
            <div className="flex items-center gap-2">
              {TodoAction.map((action) => {
                return (
                  <div key={action.id} className="relative">
                    <button
                      className={`TodoAction peer ${action.buttonStyle}`}
                    >
                      {action.icon}
                    </button>
                    <p className={`TodoAction-Label ${action.labelStyle} `}>
                      {action.label}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
  )
}
