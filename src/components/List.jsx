import React from 'react'
import { ListItem } from './ListItem'

export const List = () => {
  return (
    <div>
        <ListItem title={"list item 1"} subTitle={"this is list item 1 sub title"}/>
        <ListItem title={"list item 2"} subTitle={"this is list item 2 sub title"}/>
    </div>
  )
}
