import React, { useContext, useState } from "react";

import { postReedem } from "../../../../../api/service";
import { ToastContext, UserContext } from "../../../../../context";
import { showCustomToast } from "../../../../../helpers";
import { ToastType, UserType } from "../../../../../interfaces";
import { theme } from "../../../../../styles/theme";

import Icon from "../../icon";
import Button from "../button";

type RedeemTypes = {
  id: string;
  cost: number;
  name: string;
};

const RedeemButton = ({ id, cost, name }: RedeemTypes) => {
  const { user, setUser } = useContext(UserContext) as UserType;
  const { points } = user;

  const { toast, setToast } = useContext(ToastContext) as ToastType;

  const [processing, setProcessing] = useState(false);

  const rest = points < cost ? cost - points : cost;
  const setTitle = points < cost ? "You need" : "Redeem for";

  const handleRedeem = () => {
    setProcessing(true);
    setTimeout(() => {
      setProcessing(false);
      postReedem(id);
      setUser({ ...user, points: points - cost });
      showCustomToast(
        "success",
        `${name} redeemed successfully`,
        toast,
        setToast,
        6000
      );
    }, 3000);
  };

  return (
    <Button
      onClick={handleRedeem}
      ariaLabel="redeem product"
      disabled={points < cost ? true : false}
      state={processing === true && "processing"}
    >
      {processing !== true ? setTitle : "Processing..."}
      {processing !== true && (
        <Icon
          iconType="logoCircle"
          color={points < cost ? theme.color.neutral.grey500 : "#FFFFFF"}
          background={
            points < cost ? "#FFFFFF" : "url(#paint0_linear_485_5621)"
          }
        />
      )}
      {processing !== true && cost && rest}
    </Button>
  );
};

export default RedeemButton;
