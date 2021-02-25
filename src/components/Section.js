export default function Section({ columnNumber, children }) {
  return <div className={columnNumber}>{children}</div>
}
