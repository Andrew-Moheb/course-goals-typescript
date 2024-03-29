import { type ReactNode } from "react";

type HintBoxProps = {
  mode: 'hint',
  children: ReactNode,
}

type WarningBoxProps = {
  mode: "warning",
  severity: 'low' | 'medium' | 'high',
  children: ReactNode,
}


type InfoBoxProp = HintBoxProps | WarningBoxProps;

function InfoBox(props: InfoBoxProp) {

  const { children, mode } = props

  if (mode === 'hint') {
    return (
      <aside className="infobox infobox-hint">
        <p>{children}</p>
      </aside>)
  }

  const { severity } = props

  return (
    <aside className={`infobox infobox-warning warning--${severity}`}>
      <h2>warning</h2>
      <p>{children}</p>
    </aside>);
}

export default InfoBox;
