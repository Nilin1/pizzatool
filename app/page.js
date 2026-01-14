'use client';

import { useEffect } from 'react';

export default function RootPage() {
	useEffect(() => {
		// 默认跳转到英文页面
		window.location.href = '/en';
	}, []);

	return (
		<div className="flex items-center justify-center min-h-screen">
			<div className="text-center">
				<div className="loading loading-spinner loading-lg"></div>
				<p className="mt-4">Loading...</p>
			</div>
		</div>
	);
}
