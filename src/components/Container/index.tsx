import React, {FC, ReactNode} from "react";
import clsx from "clsx";

import style from './style.module.scss'

type ContainerProps = {
  className?: string
  children?: ReactNode
}

const Container: FC<ContainerProps> = ({className, children}) => {
  return <div className={clsx(className, style.container)}>{children}</div>
}

export default Container