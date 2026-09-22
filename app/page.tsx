export default function Home() {
  const manufacturers = [
    { name: "Kemflo (溢泰)", revenue: "26億", listed: "Yes", focus: "濾芯/整機" },
    { name: "Midea (美的)", revenue: "4565億", listed: "Yes", focus: "IoT/整機" },
    { name: "Runner (百霖)", revenue: "51億", listed: "Yes", focus: "整機" },
    { name: "Cixi (祈禧)", revenue: "2億", listed: "Yes", focus: "瞬熱/整機" },
    { name: "DingAn (鼎安)", revenue: "TBD", listed: "No", focus: "整機" },
    { name: "Koyinle (科饮乐)", revenue: "TBD", listed: "No", focus: "貿易" },
    { name: "Pureza (碧純)", revenue: "0.4億", listed: "No", focus: "濾芯" },
    { name: "Foxconn (全億大)", revenue: "-", listed: "Yes", focus: "系統設計" },
  ];

  return (
    <main style={{ padding: "2rem", fontFamily: "sans-serif" }}>
      <h1 style={{ fontSize: "24px", marginBottom: "20px" }}>淨水器代工廠評比監控</h1>
      <table style={{ width: "100%", borderCollapse: "collapse" }}>
        <thead>
          <tr style={{ backgroundColor: "#f3f4f6", textAlign: "left" }}>
            <th style={{ padding: "12px", border: "1px solid #ddd" }}>廠商名稱</th>
            <th style={{ padding: "12px", border: "1px solid #ddd" }}>年營收(RMB)</th>
            <th style={{ padding: "12px", border: "1px solid #ddd" }}>上市櫃</th>
            <th style={{ padding: "12px", border: "1px solid #ddd" }}>核心專長</th>
          </tr>
        </thead>
        <tbody>
          {manufacturers.map((m, index) => (
            <tr key={index}>
              <td style={{ padding: "12px", border: "1px solid #ddd" }}>{m.name}</td>
              <td style={{ padding: "12px", border: "1px solid #ddd" }}>{m.revenue}</td>
              <td style={{ padding: "12px", border: "1px solid #ddd" }}>{m.listed}</td>
              <td style={{ padding: "12px", border: "1px solid #ddd" }}>{m.focus}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
}
