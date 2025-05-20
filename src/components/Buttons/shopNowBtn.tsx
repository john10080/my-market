import "./style.css"

type ShopNowBtnProps = {
    label: string;
    onClick: () => void;
    disabled?: boolean;
}

const ShopNowBtn = ({label, onClick, disabled}: ShopNowBtnProps) => {
    return (
        <button 
            className="btn-shop-now"
            onClick={onClick} 
            disabled={disabled}   
        >
            {label}
            <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
            aria-hidden="true"
            >
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
        </button>
    );
}
export default ShopNowBtn;