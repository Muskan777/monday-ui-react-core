import React, { useRef, forwardRef } from "react";
import PropTypes from "prop-types";
import cx from "classnames";
import useMergeRefs from "../../hooks/useMergeRefs";
import { BEMClass } from "../../helpers/bem-helper";
import { SIZES } from "../../constants/sizes";

import "./DialogContentContainer.scss";

const DIALOG_TYPES = {
  MODAL: "modal",
  POPOVER: "popover"
};

const DIALOG_SIZES = {
  NONE: "none",
  SMALL: SIZES.SMALL,
  MEDIUM: SIZES.MEDIUM,
  LARGE: SIZES.LARGE
};

const bemHelper = BEMClass("dialog-content-container");

const DialogContentContainer = forwardRef(
  ({ className, ariaLabelledby, ariaDescribedby, type, size, children, style }, ref) => {
    const componentRef = useRef(null);
    const mergedRef = useMergeRefs({ refs: [ref, componentRef] });

    return (
      <div
        role="dialog"
        aria-labelledby={ariaLabelledby}
        aria-describedby={ariaDescribedby}
        ref={mergedRef}
        style={style}
        className={cx("dialog-content-container", className, bemHelper({ state: type }), bemHelper({ state: size }))}
      >
        {children}
      </div>
    );
  }
);

DialogContentContainer.propTypes = {
  className: PropTypes.string,
  ariaLabelledby: PropTypes.string,
  ariaDescribedby: PropTypes.string,
  type: PropTypes.oneOf([DIALOG_TYPES.MODAL, DIALOG_TYPES.POPOVER]),
  size: PropTypes.oneOf([DIALOG_SIZES.SMALL, DIALOG_SIZES.MEDIUM, DIALOG_SIZES.LARGE])
};

DialogContentContainer.defaultProps = {
  className: "",
  ariaLabelledby: "",
  ariaDescribedby: "",
  type: DIALOG_TYPES.POPOVER,
  size: DIALOG_SIZES.MEDIUM
};

DialogContentContainer.types = DIALOG_TYPES;
DialogContentContainer.sizes = DIALOG_SIZES;

export default DialogContentContainer;
