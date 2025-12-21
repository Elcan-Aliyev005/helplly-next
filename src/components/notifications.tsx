"use client";

import { Notifications } from '@mantine/notifications';

export default function NotificationsProvider() {
    return <Notifications zIndex={4000} position="top-right" />;
}

