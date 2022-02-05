import React from "react";
import classes from "./DialogueItem.module.css";
import { NavLink } from "react-router-dom";
import { DialogueItemType } from "../../../redux/dialoguesReducer";

export type DialogueItemPropsType = {
  id: number;
  personName: string;
};

export const DialogueItem = React.memo(
    ({ personName, id }: DialogueItemType) => {
      return (
          <div className={classes.dialogue}>
            <NavLink to={`/dialogues/${id}`}>{personName}</NavLink>
          </div>
      );
    }
);
