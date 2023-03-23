/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { FC, useState } from 'react';
import { Box } from '@mui/material';
import Button from '@mui/material/Button';

const SocialButton: FC = ({ children }) => <a css={css`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background: white;
    margin-left: 10px;
    margin-right: 10px;
`} href='/'>{children}</a>;

export default SocialButton;