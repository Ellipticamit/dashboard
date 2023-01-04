const Checkbox = ({ label }) => {
  return (
    <div className='form-check form-check-inline'>
      <input
        className='form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-orange-50 checked:border-orange-50 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer'
        type='checkbox'
        id={label}
        value='option1'
      />
      <label
        className='form-check-label inline-block text-gray-800 text-sm'
        htmlFor={label}>
        {label}
      </label>
    </div>
  );
};

export default Checkbox;
