import clsx from 'clsx';

const Input = ({ label, name, row = false }) => {
  return (
    <div
      className={clsx('flex flex-col space-y-1 h-full', {
        'lg:!flex-row lg:items-center': row,
      })}>
      <label
        htmlFor={name}
        className={clsx('text-sm md:text-xs lg:text-xs w-full text-slate-600', {
          'w-32': row,
        })}>
        {label}:
      </label>
      <input
        className={clsx('p-2 outline-none w-full lg:h-full', {
          'lg:w-2/3': row,
        })}
        type='text'
        id={name}
        name={name}
        placeholder=''
      />
    </div>
  );
};

export default Input;
