import clsx from 'clsx';

const Input = ({ label, name, row = false, index = 0, value = '' }) => {
  const isEven = index % 2 === 0 ? true : false;
  const disabled = name === 'email' || name === 'dob';
  return row ? (
    <div className='flex items-center space-x-2'>
      <label
        htmlFor={name}
        className={clsx('text-xs text-slate-600', {
          'w-20': isEven,
          'w-24': !isEven,
        })}>
        {label}:
      </label>
      <input
        className={clsx(
          'px-2 py-1 outline-none text-xs border border-zinc-300',
          {
            'w-2/3': isEven,
            'w-1/2': !isEven,
          }
        )}
        type='text'
        name={name}
        id={name}
        disabled={disabled}
        value={value}
      />
    </div>
  ) : (
    <div className='flex flex-col space-y-1'>
      <label htmlFor={name} className='text-xs text-slate-600'>
        {label}:
      </label>
      {name === 'country' ? (
        <div className='text-xs'>US</div>
      ) : (
        <input
          className='px-2 py-1 outline-none text-xs'
          type='text'
          name={name}
          id={name}
          value={value}
        />
      )}
    </div>
  );
};

export default Input;

// <div
// className={clsx('flex flex-col space-y-1 h-full', {
//   'lg:!flex-row lg:items-center': row,
// })}>
// <label
//   htmlFor={name}
//   className={clsx('text-sm md:text-xs lg:text-xs w-full text-slate-600', {
//     'w-32': row,
//   })}>
//   {label}:
// </label>
// <input
//   className={clsx('px-2 outline-none w-full lg:h-full', {
//     'lg:w-2/3': row,
//   })}
//   type='text'
//   id={name}
//   name={name}
//   placeholder=''
// />
// </div>
