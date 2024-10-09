import React from 'react'
import style from  "./SubmitBtn.module.scss"

export default function SubmitBtn({text, ...props}) {
  return (
    <button className={style['ui_kit--submit__btn']} {...props} >{text}</button>
)
}
