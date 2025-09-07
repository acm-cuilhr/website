import React from "react";

const FormInput = (props) => {
	// FUNCTIONS

	function validate(reg, string) {
		const regex = reg;
		return regex.test(string);
	}

	// VARIABLES

	const {
		icon,
		placeholder,
		inputType,
		regex,
		text,
		error,
		seterror,
		formInteraction,
		errorStatement,
	} = props;

	// CODE

	return (
		<div className="mb-4 w-full flex flex-col">
			<div className="w-full p-2 flex flex-row h-[50px] lg:h-[65px] bg-black rounded-xl">
				<div className="flex justify-center items-center h-full w-[8%] overflow-hidden ml-1">
					<img src={icon} alt="" />
				</div>
				<input
					className="w-[90%] h-full text-white bg-transparent font-poppins px-3 outline-none"
					type={inputType}
					placeholder={placeholder}
					onChange={(e) => {
						text.current = e.target.value;
						formInteraction.current ? null : (formInteraction.current = true);
						validate(regex, e.target.value) ? seterror(false) : seterror(true);
					}}
				/>
			</div>
			{error ? (
				<div className="w-full text-[#ff0000] font-light mt-1 ml-4 flex-row items-center flex">
					<i className="fa-solid fa-triangle-exclamation text-[#ff0000] mr-2"></i>
					{errorStatement}
				</div>
			) : null}
		</div>
	);
};

export default React.memo(FormInput);
