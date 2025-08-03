// src/components/Footer.js
import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

import {
    IconCalendarStats,
    IconDeviceDesktopAnalytics,
    IconFingerprint,
    IconGauge,
    IconHome2,
    IconDashboard,
    IconLogout,
    IconSettings,
    IconSwitchHorizontal,
    IconUser,
    IconFolder,
    IconMoon,
    IconSun,
    IconPalette,
    IconLogs,
    IconBan,
    IconKeyboard,
    IconPower,
    IconHome,
    IconReceipt2,
    IconHelp,
    IconStar,
    IconRobot,
    IconChevronDown,
    IconSwords,
    IconPick,
    IconShield,
    IconCpu,
    IconTrendingUp

} from '@tabler/icons-react';

import { useDisclosure } from '@mantine/hooks';
import { Container, Title, Divider, Center, Stack, Tooltip, Popover, Button, UnstyledButton, List, ListItem, Image, Select, Group, Box, Text, Menu } from '@mantine/core';
import { useTheme } from '../contexts/ThemeContext';

function NavbarLink({ label, to }) {
    const navigate = useNavigate();

    return (
        <Text size="sm" fw={400} className="footerLink"
            onClick={() => {
                navigate(to);
            }}
        >{label}</Text>
    );
}

function ExternalLink({ label, to }) {
    return (
        <Text size="sm" fw={400} className="footerLink"
            component="a"
            href={to}
            target="_blank"
            rel="noopener noreferrer"
        >{label}</Text>
    );
}

const Footer = () => {
    return (
        <Group className="footer-horizontal">
            <Group className="footerHeader">
                <Text size="sm" fw={400} className="footerText">
                    EZeeCheats
                </Text>
            </Group>

            {/* Trust Indicators */}
            <Container className="footerMain">
                <Stack gap="xs" >
                    <Title order={3} ta="center">
                        It's So EZee!
                    </Title>
                    <Group gap="none">
                        <div style={{ height: "20px" }} />
                        <Group gap="xs">
                            <IconTrendingUp className="footerFeatureIcons" size={20} color="var(--mantine-color-yellow-6)" />
                            <Text className="footerFeatureText" size="sm">Pro Performance</Text>
                        </Group>
                        <Group gap="xs">
                            <IconShield className="footerFeatureIcons" size={20} color="var(--mantine-color-green-6)" />
                            <Text className="footerFeatureText" size="sm">Anti-Ban</Text>
                        </Group>
                        <Group gap="xs">
                            <IconCpu className="footerFeatureIcons" size={20} color="var(--mantine-color-blue-6)" />
                            <Text className="footerFeatureText" size="sm">Hardware-Enabled</Text>
                        </Group>
                    </Group>
                </Stack>
            </Container>

            <Group className="footerFooter" gap="lg">
                <NavbarLink label="Home" to="/" />
                <NavbarLink label="Support" to="/faq" />
                <ExternalLink label="Discord" to="https://discord.gg/wTYZHHun" />
            </Group>
        </Group>

    );
};

export default Footer;
