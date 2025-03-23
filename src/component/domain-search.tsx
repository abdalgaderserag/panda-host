export default function domainSearch() {
  return (
    <section>
      <div id="main-domain-body">
        <h2>Search Domain</h2>
        <div id="domain-search">
          <input
            type="url"
            name="domain"
            id="domain"
            placeholder="Domain name here"
          />
          <select>
            <option value=".com">.com</option>
            <option value=".net">.net</option>
            <option value=".org">.org</option>
          </select>
          <button className="button button-primary">Search Domain</button>
        </div>
        <div id="domains-view">
          <div>
            .com <span>$10/m</span>
          </div>
          <div>
            .net <span>$8/m</span>
          </div>
          <div>
            .org <span>$15/m</span>
          </div>
          <div>
            .com <span>$8/m</span>
          </div>
          <div>
            .org <span>$10/m</span>
          </div>
          <div>
            .gov <span>$20/m</span>
          </div>
        </div>
      </div>
    </section>
  );
}
