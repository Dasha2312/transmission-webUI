
function Table({data, renderHeader, renderRow}) {

  return (
    <table className="w-full">
      <thead className="bg-gray-50 border-b border-gray-200 sticky top-0">
        <tr>{renderHeader()}</tr>
      </thead>

      <tbody className="divide-y divide-gray-100">
        {data.length > 0 
        ? (
          data.map(item => (
            <tr key={item.id} className="cursor-pointer transition-colors ">{renderRow(item)}</tr>
          ))
        ) : (
          <tr> <td colSpan={100}>You don't have torrents now</td></tr>
          
        )}
      </tbody>
    </table>
  );
}

export default Table;