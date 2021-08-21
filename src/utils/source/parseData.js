/**
 *
 * @param {JSON} table JSON from Google SpreadSheet
 * @returns JSON clean
 */
export default function parseData({table}) {
  return table.rows.map(row => [
      ...table.cols.map((col, index) => ({ [col.label]: row.c[index].v,}))
    ]
  )
  .map(data => 
    data.reduce((acc, value) =>  ({...acc, ...value}), {})
  )
  .map(tuple => ({
    ...tuple,
    ingredientes: tuple.ingredientes.replace(/\s+/ig, '').split(";")
  }));
}