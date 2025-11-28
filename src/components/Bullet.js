export default function Bullet({ children }) {
  return (
    <span style={{ display: "flex", alignItems: "center", marginY: "4px" }}>
      <img
        src="/Bullet.svg"
        alt="•"
        aria-hidden="true"
        width={18}
        height={18}
        style={{ marginRight: "8px" }}
      />
      <span>{children}</span>
    </span>
  );
}
