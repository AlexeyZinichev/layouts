export default function IconSwitch({ icon, onSwitch }) {
  return (
    <i className="material-icons icon-switch" onClick={onSwitch}>
      {icon}
    </i>
  )
}