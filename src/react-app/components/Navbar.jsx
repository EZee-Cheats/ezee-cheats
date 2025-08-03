// src/components/Navbar.js
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
    IconQuestionMark,
    IconStar,
    IconRobot,
    IconChevronDown,
    IconSwords,
    IconPick,
    IconBarbell,
    IconTrophy,
    IconBrandDiscord,
    IconMenu2

} from '@tabler/icons-react';

import { useDisclosure } from '@mantine/hooks';
import { Container, Divider, Center, Stack, Tooltip, Popover, Button, UnstyledButton, List, ListItem, Image, Select, Group, Box, Text, Menu } from '@mantine/core';
import { useTheme } from '../contexts/ThemeContext';

function NavbarDropdown({ icon: Icon, label, active, items }) {
    const navigate = useNavigate();

    return (
        <Menu trigger="hover" openDelay={50} closeDelay={200}>
            <Menu.Target>
                <Text fw={500} className="navbarLink" data-active={active || undefined}>
                    <Icon stroke={2} />
                    {label}
                    <IconChevronDown className="navbarDropdownChevron" stroke={2} />
                </Text>
            </Menu.Target>
            <Menu.Dropdown className="navbarMenuDropdown">
                {items.map((item, index) => (
                    <Menu.Item
                        fw={400}
                        key={index}
                        leftSection={item.icon && <item.icon stroke={1.5} />}
                        onClick={() => navigate(item.to)}
                        className="navbarMenuItem"
                    >
                        {item.label}
                    </Menu.Item>
                ))}
            </Menu.Dropdown>
        </Menu>
    );
}

function NavbarLink({ icon: Icon, label, active, to }) {
    const navigate = useNavigate();
    const location = useLocation();

    return (
        <Text fw={500} className="navbarLink"
            data-active={active || undefined}
            onClick={() => {
                navigate(to);
            }}
        ><Icon stroke={2} />{label}</Text>
    );
}

function ThemeButton({ icon: Icon, label }) {
    const { currentTheme, themeColors, handleThemeChange } = useTheme();
    const [opened, { close, toggle }] = useDisclosure(false);

    return (
        <Popover width={200} position="bottom" withArrow shadow="md" opened={opened} onChange={toggle}>
            <Popover.Target>
                <UnstyledButton
                    className="navbarButton"
                    onClick={toggle}
                >
                    <Icon size={20} stroke={2} />
                </UnstyledButton>
            </Popover.Target>
            <Popover.Dropdown
                className="theme-popover"
            >

                <Group gap="sm" justify="center">
                    {Object.entries(themeColors).map(([themeName, color]) => (
                        <UnstyledButton
                            key={themeName}
                            onClick={() => {
                                handleThemeChange(themeName);
                                close();
                            }}
                        >
                            <Box
                                style={{
                                    width: 24,
                                    height: 24,
                                    borderRadius: 4,
                                    backgroundColor: color,
                                    cursor: 'pointer',
                                }}
                                className="theme-color-box"
                            />
                        </UnstyledButton>
                    ))}
                </Group>
            </Popover.Dropdown>
        </Popover>
    );
}

function ColorSchemeButton() {
    const { colorScheme, handleColorSchemeChange } = useTheme();

    return (
        <UnstyledButton
            className="navbarButton"
            onClick={handleColorSchemeChange}
        >
            {colorScheme === 'dark' ? (
                <IconSun size={20} stroke={2} />
            ) : (
                <IconMoon size={20} stroke={2} />
            )}
        </UnstyledButton>
    );
}

function DiscordButton() {
    return (
        <UnstyledButton
            className="navbarButton"
            component="a"
            href="https://discord.gg/wTYZHHun"
            target="_blank"
            rel="noopener noreferrer"
        >
            <IconBrandDiscord size={20} stroke={2} />
        </UnstyledButton>
    );
}

function HamburgerMenuButton({ active }) {
    const navigate = useNavigate();
    const [opened, { close, toggle }] = useDisclosure(false);

    const menuItems = [
        { label: 'EZee Rotation', to: '/ezeerotation', icon: IconSwords },
        { label: 'EZee Scaping', to: '/ezeescaping', icon: IconPick },
        { label: 'Pricing', to: '/pricing', icon: IconReceipt2 },
        { label: 'Showcase', to: '/accolades', icon: IconTrophy },
        { label: 'FAQ', to: '/faq', icon: IconQuestionMark }
    ];

    return (
        <Menu className="navbarHamburger" opened={opened} onChange={toggle} position="bottom-start">
            <Menu.Target>
                <UnstyledButton
                    onClick={toggle}
                >
                    <IconMenu2 size={20} stroke={2} />
                </UnstyledButton>
            </Menu.Target>
            <Menu.Dropdown className="navbarMenuDropdown">
                {menuItems.map((item, index) => (
                    <Menu.Item
                        fw={400}
                        key={index}
                        leftSection={item.icon && <item.icon stroke={1.5} />}
                        onClick={() => {
                            navigate(item.to);
                            close();
                        }}
                        className="navbarMenuItem"
                    >
                        {item.label}
                    </Menu.Item>
                ))}
            </Menu.Dropdown>
        </Menu>
    );
}

const Navbar = () => {
    const [active, setActive] = useState('dashboard');
    const [saving, setSaving] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        const path = location.pathname;
        if (path === '/') setActive('');
        else if (path === '/ezeerotation' || path === '/ezeescaping') setActive('products');
        else if (path === '/features') setActive('features');
        else if (path === '/pricing') setActive('pricing');
        else if (path === '/accolades') setActive('accolades');
        else if (path === '/faq') setActive('faq');
        else setActive('');
    }, [location.pathname]);

    return (
        <Group className="navbar-horizontal">
            <Group className="navbarHeader">
                <Image src="./images/ez.png" className="navbarHomeButton"
                    onClick={() => {
                        navigate("/");
                    }}
                />
                <HamburgerMenuButton active={active} />
            </Group>

            <Container className="navbarMain">
                <Group gap="xl" >
                    <NavbarDropdown
                        icon={IconRobot}
                        label="Products"
                        active={active === "products"}
                        items={[
                            { label: 'EZee Rotation', to: '/ezeerotation', icon: IconSwords },
                            { label: 'EZee Scaping', to: '/ezeescaping', icon: IconPick }
                        ]}
                    />
                    <NavbarLink icon={IconReceipt2} label="Pricing" active={active === "pricing"} to="/pricing" />
                    <NavbarLink icon={IconTrophy} label="Showcase" active={active === "accolades"} to="/accolades" />
                    <NavbarLink icon={IconQuestionMark} label="FAQ" active={active === "faq"} to="/faq" />
                </Group>
            </Container>

            <Group className="navbarFooter">
                <DiscordButton />
                <ThemeButton
                    icon={IconPalette}
                    label="Theme"
                />
                <ColorSchemeButton />
            </Group>

        </Group>
    );
};

export default Navbar;
