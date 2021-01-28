import React from 'react';

type Props = {
    display: string;
    onClickAction: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

const MyButton = (props: Props) => {
    return (
        <button onClick={props.onClickAction} >{props.display}</button>
    );
}

export default MyButton;
