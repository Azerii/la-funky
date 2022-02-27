import styled from 'styled-components';
import { useField } from 'formik';
import { useState } from 'react';
import { useEffect } from 'react';

export const FormGroupWrapper = styled.div<any>`
  .fieldWrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    border-radius: 4px;
    height: ${(props) => (props.fieldStyle === 'longText' ? 'auto' : '48px')};
    border: 1px solid #ced4da;
    position: relative;

    &.error {
      border-color: var(--bs-danger);
    }
  }

  input,
  textarea,
  select {
    display: block;
    width: 100%;
    height: 100%;
    padding: 0 16px;
    background-color: transparent;
    border: none;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
  }

  .toggleShow {
    display: none;
  }

  &.password {
    input,
    textarea {
      width: 80%;
    }

    .toggleShow {
      display: inline;
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      right: 1.5rem;
    }
  }

  .errorText {
    display: block;
    width: 100%;
    text-align: left;
    margin-top: 6px;
    font-size: 12px;
    color: var(--bs-danger);
  }
`;

const handleToggleShowPassword = (id: string) => {
  const field: HTMLInputElement | null = document.querySelector(`#${id}`);

  if (!field) return;

  if (field.type === 'password') {
    field.type = 'text';
  } else {
    field.type = 'password';
  }
};

const FormGroup = (props: any) => {
  const { fieldStyle, className, name, type, ...otherProps } = props;

  const [field, meta] = useField({ ...props });
  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    document.querySelectorAll(`input`).forEach((input) => {
      input.addEventListener('mousewheel', function (e: any) {
        e.target.blur();
      });
    });
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <FormGroupWrapper className={className} fieldStyle={fieldStyle}>
        <div
          className={`fieldWrapper${
            meta.touched && meta.error ? ' error' : ''
          }`}
        >
          {fieldStyle === 'shortText' && (
            <>
              <input
                {...field}
                {...otherProps}
                name={name}
                type={type || 'text'}
                className="textSmall"
                id={name}
                // autoComplete="off"
              />
              {type === 'password' && (
                <i
                  className={`toggleShow cursorPointer linearicons${
                    showPassword ? '-eye' : '-eye'
                  }`}
                  onClick={(e) => {
                    setShowPassword((prev) => !prev);
                    handleToggleShowPassword(name);
                  }}
                />
              )}
            </>
          )}
          {fieldStyle === 'longText' && (
            <>
              <textarea
                {...field}
                {...props}
                className="textSmall"
                id={name}
                autoComplete="off"
              />
            </>
          )}
        </div>
        {meta.touched && meta.error && (
          <span className="errorText">{meta.error}</span>
        )}
      </FormGroupWrapper>
    </>
  );
};

export default FormGroup;
