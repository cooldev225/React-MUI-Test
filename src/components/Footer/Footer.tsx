/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { Typography, useTheme } from '@mui/material';
import Button from '@mui/material/Button';
import SocialButton from '../SocialButton';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FavoriteIcon from '@mui/icons-material/Favorite';
import TripOriginIcon from '@mui/icons-material/TripOrigin';
import EastIcon from '@mui/icons-material/East';

import { FOOTER_TEXT, FOOTER_HEIGHT } from '../../utils/constants';

const socialIcons = [
	<TwitterIcon key={0} />,
	<GitHubIcon key={1} />,
	<FacebookIcon key={2} />,
	<InstagramIcon key={4} />,
	<LinkedInIcon key={5} />,
];

export const Footer = () => {
	const theme = useTheme();
	return (
		// <div
		// 	css={css`
		// 		flex: 1;
		// 		display: flex;
		// 		justify-content: center;
		// 		background: ${theme.palette.background.paper};
		// 		min-height: ${FOOTER_HEIGHT};
		// 	`}
		// >
		// 	<Typography
		// 		css={css`
		// 			word-spacing: 0.1rem;
		// 			text-transform: uppercase;
		// 		`}
		// 		variant='caption'
		// 		color='textSecondary'
		// 	>
		// 		{FOOTER_TEXT}
		// 	</Typography>
		// </div>
		<div
			css={css`
				position: relative;
				background: rgba(0, 0, 0, 0.2);
				min-height: ${FOOTER_HEIGHT}px;
				padding-top: 100px;
				padding-left: 100px;
				padding-right: 100px;
			`}
		>
			<div
				css={css`
					display: flex;
					align-items: center;
					justify-content: space-between;
					position: absolute;
					top: -30px;
					left: 50%;
					background: rgba(0, 0, 0, 0.3);
					width: calc(100vw - 200px);
					padding: 30px;
					border-radius: 15px;
					transform: translateX(-50%);
					z-index: 999;
				`}
			>
				<p>Find My Pictures</p>
				<Button variant='contained' endIcon={<EastIcon />}>
					Go
				</Button>
			</div>
			<div
				css={css`
					display: flex;
					align-items: center;
					justify-content: space-between;
				`}
			>
				<div
					css={css`
						display: flex;
						align-items: center;
						justify-content: space-between;
						width: 25%;
					`}
				>
					<p>
						<TripOriginIcon />
					</p>
					<div>
						<p>Soireés</p>
						<p
							css={css`
								display: flex;
								align-items: center;
								justify-content: space-between;
							`}
						>
							<span>From Paris with</span> <FavoriteIcon sx={{ color: 'red' }} />
						</p>
					</div>
				</div>
				<div
					css={css`
						display: flex;
						align-items: center;
						justify-content: space-between;
						width: 25%;
					`}
				>
					<a
						href='/login'
						css={css`
							text-decoration: none;
							color: white;
						`}
					>
						Partner login
					</a>
					<img src='/flag-uk.png' alt='UK flag here' width='30px' />
				</div>
			</div>

			<div
				css={css`
					display: flex;
					align-items: center;
					justify-content: space-between;
				`}
			>
				<div
					css={css`
						width: 25%;
					`}
				>
					&copy; Soire.es All rights reserved.
				</div>
				<div>Terms Privacy Policy</div>
				<div
					css={css`
						display: flex;
						align-items: center;
						justify-content: space-between;
						width: 25%;
					`}
				>
					{socialIcons.map((item, index) => {
						return <SocialButton key={index}>{item}</SocialButton>;
					})}
				</div>
			</div>
		</div>
	);
};
