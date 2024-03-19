import React from 'react';
import '../Styles/ArsHeader.css';

const ArsHeader = () => {

    const menuBar = () => {
        let navbars = document.getElementById("navbar");

        if (navbars.style.display == "flex") {
            navbars.style.display = "none";
        } else {
            navbars.style.display = "flex";
        }
    };

    document.addEventListener("scroll", () => {
        let pageScroll = document.querySelector("#container");
        if (window.scrollY > 0) {
            pageScroll.classList.add("scrolled");
        } else {
            pageScroll.classList.remove("scrolled");
        }
    });

    return (
        <>
            <div id='container'>
                <div id='logo'>
                    <h2>ARSHA</h2>
                </div>
                <div id='navbar'>
                    <nav>
                        <ul>
                            <li>Home</li>
                            <li>About</li>
                            <li>Services</li>
                            <li>Portfolio</li>
                            <li>Team</li>
                            <li>Drop Down</li>
                            <li>Contact</li>
                            <li>
                                <button>Get Started</button>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div id='menu'>
                    <span onClick={menuBar}>&#9776;</span>
                </div>
            </div>
            <section>
                <div>
                    <p>
                        Please note that this conversion retains the original structure and logic
                        of the code. However, it's important to mention that using direct DOM
                        manipulation in React is discouraged. React works best when you manage
                        the state through its state management system and let React handle the
                        rendering. If possible, consider refactoring this code to use React state
                        and events instead of direct DOM manipulation.
                    </p>
                    <p>
                        Please note that this conversion retains the original structure and logic
                        of the code. However, it's important to mention that using direct DOM
                        manipulation in React is discouraged. React works best when you manage
                        the state through its state management system and let React handle the
                        rendering. If possible, consider refactoring this code to use React state
                        and events instead of direct DOM manipulation.
                    </p>
                    <p>
                        Please note that this conversion retains the original structure and logic
                        of the code. However, it's important to mention that using direct DOM
                        manipulation in React is discouraged. React works best when you manage
                        the state through its state management system and let React handle the
                        rendering. If possible, consider refactoring this code to use React state
                        and events instead of direct DOM manipulation.
                    </p>
                    <p>
                        Please note that this conversion retains the original structure and logic
                        of the code. However, it's important to mention that using direct DOM
                        manipulation in React is discouraged. React works best when you manage
                        the state through its state management system and let React handle the
                        rendering. If possible, consider refactoring this code to use React state
                        and events instead of direct DOM manipulation.
                    </p>
                    <p>
                        Please note that this conversion retains the original structure and logic
                        of the code. However, it's important to mention that using direct DOM
                        manipulation in React is discouraged. React works best when you manage
                        the state through its state management system and let React handle the
                        rendering. If possible, consider refactoring this code to use React state
                        and events instead of direct DOM manipulation.
                    </p>
                    <p>
                        Please note that this conversion retains the original structure and logic
                        of the code. However, it's important to mention that using direct DOM
                        manipulation in React is discouraged. React works best when you manage
                        the state through its state management system and let React handle the
                        rendering. If possible, consider refactoring this code to use React state
                        and events instead of direct DOM manipulation.
                    </p>
                    <p>
                        Please note that this conversion retains the original structure and logic
                        of the code. However, it's important to mention that using direct DOM
                        manipulation in React is discouraged. React works best when you manage
                        the state through its state management system and let React handle the
                        rendering. If possible, consider refactoring this code to use React state
                        and events instead of direct DOM manipulation.
                    </p>
                    <p>
                        Please note that this conversion retains the original structure and logic
                        of the code. However, it's important to mention that using direct DOM
                        manipulation in React is discouraged. React works best when you manage
                        the state through its state management system and let React handle the
                        rendering. If possible, consider refactoring this code to use React state
                        <p>
                        Please note that this conversion retains the original structure and logic
                        of the code. However, it's important to mention that using direct DOM
                        manipulation in React is discouraged. React works best when you manage
                        the state through its state management system and let React handle the
                        rendering. If possible, consider refactoring this code to use React state
                        and events instead of direct DOM manipulation.
                    </p>
                    <p>
                        Please note that this conversion retains the original structure and logic
                        of the code. However, it's important to mention that using direct DOM
                        manipulation in React is discouraged. React works best when you manage
                        the state through its state management system and let React handle the
                        rendering. If possible, consider refactoring this code to use React state
                        and events instead of direct DOM manipulation.
                    </p>
                    <p>
                        Please note that this conversion retains the original structure and logic
                        of the code. However, it's important to mention that using direct DOM
                        manipulation in React is discouraged. React works best when you manage
                        the state through its state management system and let React handle the
                        rendering. If possible, consider refactoring this code to use React state
                        and events instead of direct DOM manipulation.
                    </p>
                    
                        and events instead of direct DOM manipulation.
                    </p>
                    <p>
                        Please note that this conversion retains the original structure and logic
                        of the code. However, it's important to mention that using direct DOM
                        manipulation in React is discouraged. React works best when you manage
                        the state through its state management system and let React handle the
                        rendering. If possible, consider refactoring this code to use React state
                        and events instead of direct DOM manipulation.
                    </p>
                    <p>
                        Please note that this conversion retains the original structure and logic
                        of the code. However, it's important to mention that using direct DOM
                        manipulation in React is discouraged. React works best when you manage
                        the state through its state management system and let React handle the
                        rendering. If possible, consider refactoring this code to use React state
                        and events instead of direct DOM manipulation.
                    </p>
                    <p>
                        Please note that this conversion retains the original structure and logic
                        of the code. However, it's important to mention that using direct DOM
                        manipulation in React is discouraged. React works best when you manage
                        the state through its state management system and let React handle the
                        rendering. If possible, consider refactoring this code to use React state
                        and events instead of direct DOM manipulation.
                    </p>
                    
                </div>
            </section>
        </>
    )
}

export default ArsHeader;