export default function Home() {
  const data = [
    { name: "Kemflo", revenue: 2600, listed: "Yes" },
    { name: "Midea", revenue: 456500, listed: "Yes" },
    { name: "Runner", revenue: 5100, listed: "Yes" },
    { name: "Cixi", revenue: 200, listed: "Yes" },
  ];

  return (
    <div style={{ padding: "40px" }}>
      <h1>淨水器代工廠評比監控</h1>
      <table border={1} style={{ width: "100%", textAlign: "left", marginTop: "20px" }}>
        <thead>
          <tr>
            <th>廠商名稱</th>
            <th>營收(RMB百萬)</th>
            <th>上市櫃</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td>{item.name}</td>
              <td>{item.revenue}</td>
              <td>{item.listed}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
