import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import style from './navbar.module.scss';

export const Navbar = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [isVertical, setIsVertical] = useState(false);

    const menuRefs = useRef([]);

    useEffect(() => {
        const handleResize = () => setIsVertical(window.innerWidth < 768);

        window.addEventListener('resize', handleResize);
        handleResize(); 

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        isVertical ? setActiveIndex(0) : null
    }, [isVertical])

    const menuItems = {
        horizontal: [
            { icon: 'home', label: 'Home' },
            { icon: 'search', label: 'Search', class: 'search' },
            {icon: 'add_box', label: 'Create' },
            { icon: 'movie', label: 'Reels' },
        ],
        vertical: [
            { icon: 'home', label: 'Home' },
            { icon: 'search', label: 'Search'},
            { icon: 'explore', label: 'Explore' },
            { icon: 'movie', label: 'Reels' },
            { icon: 'chat', label: 'Message' },
            { icon: 'favorite', label: 'Notification'},
            { icon: 'add_box', label: 'Create' },
        ]
    };

    // Choose the menu items based on orientation
    const currentMenuItems = isVertical ? menuItems.horizontal : menuItems.vertical;

    return (
        <aside>
            <h1 className={style.logo_section}>PIXR</h1>
            <ul>
                {currentMenuItems.map((item, index) => (
                    <motion.li
                        key={index}
                        ref={(el) => menuRefs.current[index] = el}
                        className={`${index === activeIndex ? style.active : ''} ${item.class ? style[item.class] : ''}`}
                        onClick={() => setActiveIndex(index)}
                        animate={
                            isVertical && index === activeIndex
                                ? { y: -10 }
                                : { y: 0 }
                        }
                    >
                        <i className="material-symbols-rounded">{item.icon}</i>
                        <h1>{item.label}</h1>
                    </motion.li>
                ))}
                <motion.span
                    className={style.indicter}
                    layoutId="indicator"
                    initial={false}
                    animate={{
                        left: !isVertical ? 'unset' : `${menuRefs.current[activeIndex]?.offsetLeft}px`,
                        top: !isVertical ? `${menuRefs.current[activeIndex]?.offsetTop}px` : '0',
                        right: !isVertical ? '0' : 'unset',
                    }}
                    transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                />
            </ul>
        </aside>
    );
};
