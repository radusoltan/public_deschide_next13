import React from "react";

function ScrollableList({ articles }) {
  return (
      <div className="relative flex flex-row overflow-x-scroll scrollbar-hide">
        {articles.map((item, index) => (
            <div
                key={index}
                className="flex-shrink-0 w-64 h-48 mr-4 bg-gray-300 rounded-lg"
            >
              {item.title}
            </div>
        ))}
        <div className="absolute inset-y-0 right-0 w-16 bg-gray-200 opacity-0 hover:opacity-100 transition-opacity">
          <div className="h-full p-2 overflow-y-auto">
            {articles.map((item, index) => (
                <div key={index} className="h-16 bg-gray-400 mb-2"></div>
            ))}
          </div>
        </div>
      </div>
  );
}

export default ScrollableList