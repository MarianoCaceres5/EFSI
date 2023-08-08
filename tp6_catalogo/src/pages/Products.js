import React from 'react'

export default function Products() {
  return (
    <main>
        <section className="search-filter">
            <label>Search:</label>
            <input type="text" id="search" placeholder="Search products..."/>
            <label>Filter By:</label>
            <select id="category">
                <option value="all">All Categories</option>
                <option value="rings">Rings</option>
                <option value="collars">Collars</option>
                {/* <!-- Add more categories as needed --> */}
            </select>
        </section>
        <section className="product-list">
            <div className="product" data-category="collars">
                <img src="https://www.0800donrouch.com.ar//images/725/DIJE_BABY_ROUCH_CLSICOPLATA_0800_DON_ROUCH2021-12-07-05-32-50pm.png" alt="Product 1"/>
                <h1>Product 1</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <button className="btn">SEE MORE</button>
            </div>
            <div className="product" data-category="collars">
                <img src="https://www.0800donrouch.com.ar//images/719/BABY_ROUCH_ANILLO_PLATA_CLASICO_0800_DON_ROUCH2022-07-04-01-28-03pm.jpg" alt="Product 2"/>
                <h1>Product 2</h1>
                <p>Nulla facilisi. Curabitur fermentum, massa in vestibulum cursus.</p>
                <button className="btn">SEE MORE</button>
            </div>
            {/* <!-- Add more product blocks --> */}
            <div className="product" data-category="collars">
                <img src="https://www.0800donrouch.com.ar//images/723/CHAIN_BABY_ROUCH_PLATA_FULL_ICE_0800_DON_ROUCH2021-12-06-06-38-49pm.png"alt="Product 3"/>
                <h1>Product 3</h1>
                <p>Vestibulum auctor dolor vel tincidunt efficitur.</p>
                <button className="btn">SEE MORE</button>
            </div>
            <div className="product" data-category="collars">
                <img src="https://www.0800donrouch.com.ar//images/608/ARIT8S_PLATA_0800_DON_ROUCH_AROS2023-01-05-09-32-28am.png" alt="Product 4"/>
                <h1>Product 4</h1>
                <p>Cras at sapien a libero tincidunt sollicitudin.</p>
                <button className="btn">SEE MORE</button>
            </div>
            <div className="product" data-category="rings">
                <img src="https://www.0800donrouch.com.ar//images/838/HILO_SAGRADO_0800_FULL_ICE2023-01-09-10-28-49am.png" alt="Product 4"/>
                <h1>Product 5</h1>
                <p>Cras at sapien a libero tincidunt sollicitudin.</p>
                <button className="btn">SEE MORE</button>
            </div>
            <div className="product" data-category="rings">
                <img src="https://www.0800donrouch.com.ar//images/571/Chain-pulsera-0800-don-rouch-PLATA2020-10-21-01-37-38pm.jpg" alt="Product 2"/>
                <h1>Product 6</h1>
                <p>Nulla facilisi. Curabitur fermentum, massa in vestibulum cursus.</p>
                <button className="btn">SEE MORE</button>
            </div>
            {/* <!-- Repeat similar product blocks here --> */}
        </section>
    </main>
  )
}
