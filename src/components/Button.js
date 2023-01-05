import clsx from 'clsx';

const Button = ({ text, color, classes = '' }) => {
  return (
    <button
      className={clsx(
        `w-full h-full text-xs font-semibold rounded-md bg-primary-100 text-white cursor-pointer ${classes}`,
        {
          'bg-success-dark': color === 'success',
          'bg-red-500': color === 'danger',
        }
      )}>
      {text}
    </button>
  );
};

export default Button;
