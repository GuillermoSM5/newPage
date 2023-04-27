import { extendTheme, type ThemeConfig } from '@chakra-ui/react';
import type { StyleFunctionProps } from '@chakra-ui/styled-system';
import { mode } from '@chakra-ui/theme-tools';

const config: ThemeConfig = {
	initialColorMode: 'system',
	useSystemColorMode: true,
};

const theme = extendTheme({
	config,
	styles: {
		global: (props: StyleFunctionProps) => ({
			body: { bg: mode('#FFFFFF', '#000000')(props) },
		}),
	},
	fonts: {
		body: 'Arial, Helvetica, sans-serif',
	},
});

export default theme;
