/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
    content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
	container: {
		center: true,
		padding: "15px",
	},
	screens: {
		xs: '359px',
		sm: '640px',
		md: '768px',
		lg: '960px',
		xl: '1200px',
	},
	fontFamily: {
		primary: "var(--font-jetbrainsMono)",
	},
  	extend: {
  		colors: {
  			background: 'hsl(var(--primary))',
  			foreground: 'hsl(var(--foreground))',
        accent: {
          DEFAULT: "#4A90E2",
          hover: "#4ae29c",
        },
  		primary: {
  			DEFAULT: 'hsl(210, 50%, 15%)',
  			foreground: '#4a90e2'
  		},
  		secondary: {
  			DEFAULT: '#e29c4a',
  		},
  		problem : {
			DEFAULT: '#e2504a'
		},
  		destructive: {
  			DEFAULT: 'hsl(var(--destructive))',
  			foreground: 'hsl(var(--destructive-foreground))'
  		},
  		border: 'hsl(var(--border))',
  		input: 'hsl(var(--input))',
  		ring: 'hsl(var(--ring))',
  		chart: {
  			'1': 'hsl(var(--chart-1))',
  			'2': 'hsl(var(--chart-2))',
  			'3': 'hsl(var(--chart-3))',
  			'4': 'hsl(var(--chart-4))',
  			'5': 'hsl(var(--chart-5))'
  		}
  		},
		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
}

