(function() {var implementors = {};
implementors["reqwest"] = ["impl <a class=\"trait\" href=\"foreign_types/trait.ForeignType.html\" title=\"trait foreign_types::ForeignType\">ForeignType</a> for <a class=\"struct\" href=\"openssl/ssl/struct.SslCipher.html\" title=\"struct openssl::ssl::SslCipher\">SslCipher</a>","impl&lt;T&gt; <a class=\"trait\" href=\"foreign_types/trait.ForeignType.html\" title=\"trait foreign_types::ForeignType\">ForeignType</a> for <a class=\"struct\" href=\"openssl/stack/struct.Stack.html\" title=\"struct openssl::stack::Stack\">Stack</a>&lt;T&gt; <span class=\"where fmt-newline\">where T: <a class=\"trait\" href=\"openssl/stack/trait.Stackable.html\" title=\"trait openssl::stack::Stackable\">Stackable</a></span>","impl <a class=\"trait\" href=\"foreign_types/trait.ForeignType.html\" title=\"trait foreign_types::ForeignType\">ForeignType</a> for <a class=\"struct\" href=\"openssl/asn1/struct.Asn1GeneralizedTime.html\" title=\"struct openssl::asn1::Asn1GeneralizedTime\">Asn1GeneralizedTime</a>","impl <a class=\"trait\" href=\"foreign_types/trait.ForeignType.html\" title=\"trait foreign_types::ForeignType\">ForeignType</a> for <a class=\"struct\" href=\"openssl/asn1/struct.Asn1Time.html\" title=\"struct openssl::asn1::Asn1Time\">Asn1Time</a>","impl <a class=\"trait\" href=\"foreign_types/trait.ForeignType.html\" title=\"trait foreign_types::ForeignType\">ForeignType</a> for <a class=\"struct\" href=\"openssl/asn1/struct.Asn1String.html\" title=\"struct openssl::asn1::Asn1String\">Asn1String</a>","impl <a class=\"trait\" href=\"foreign_types/trait.ForeignType.html\" title=\"trait foreign_types::ForeignType\">ForeignType</a> for <a class=\"struct\" href=\"openssl/asn1/struct.Asn1Integer.html\" title=\"struct openssl::asn1::Asn1Integer\">Asn1Integer</a>","impl <a class=\"trait\" href=\"foreign_types/trait.ForeignType.html\" title=\"trait foreign_types::ForeignType\">ForeignType</a> for <a class=\"struct\" href=\"openssl/asn1/struct.Asn1BitString.html\" title=\"struct openssl::asn1::Asn1BitString\">Asn1BitString</a>","impl <a class=\"trait\" href=\"foreign_types/trait.ForeignType.html\" title=\"trait foreign_types::ForeignType\">ForeignType</a> for <a class=\"struct\" href=\"openssl/asn1/struct.Asn1Object.html\" title=\"struct openssl::asn1::Asn1Object\">Asn1Object</a>","impl <a class=\"trait\" href=\"foreign_types/trait.ForeignType.html\" title=\"trait foreign_types::ForeignType\">ForeignType</a> for <a class=\"struct\" href=\"openssl/bn/struct.BigNumContext.html\" title=\"struct openssl::bn::BigNumContext\">BigNumContext</a>","impl <a class=\"trait\" href=\"foreign_types/trait.ForeignType.html\" title=\"trait foreign_types::ForeignType\">ForeignType</a> for <a class=\"struct\" href=\"openssl/bn/struct.BigNum.html\" title=\"struct openssl::bn::BigNum\">BigNum</a>","impl <a class=\"trait\" href=\"foreign_types/trait.ForeignType.html\" title=\"trait foreign_types::ForeignType\">ForeignType</a> for <a class=\"struct\" href=\"openssl/conf/struct.Conf.html\" title=\"struct openssl::conf::Conf\">Conf</a>","impl <a class=\"trait\" href=\"foreign_types/trait.ForeignType.html\" title=\"trait foreign_types::ForeignType\">ForeignType</a> for <a class=\"struct\" href=\"openssl/dh/struct.Dh.html\" title=\"struct openssl::dh::Dh\">Dh</a>","impl <a class=\"trait\" href=\"foreign_types/trait.ForeignType.html\" title=\"trait foreign_types::ForeignType\">ForeignType</a> for <a class=\"struct\" href=\"openssl/dsa/struct.Dsa.html\" title=\"struct openssl::dsa::Dsa\">Dsa</a>","impl <a class=\"trait\" href=\"foreign_types/trait.ForeignType.html\" title=\"trait foreign_types::ForeignType\">ForeignType</a> for <a class=\"struct\" href=\"openssl/ec/struct.EcGroup.html\" title=\"struct openssl::ec::EcGroup\">EcGroup</a>","impl <a class=\"trait\" href=\"foreign_types/trait.ForeignType.html\" title=\"trait foreign_types::ForeignType\">ForeignType</a> for <a class=\"struct\" href=\"openssl/ec/struct.EcPoint.html\" title=\"struct openssl::ec::EcPoint\">EcPoint</a>","impl <a class=\"trait\" href=\"foreign_types/trait.ForeignType.html\" title=\"trait foreign_types::ForeignType\">ForeignType</a> for <a class=\"struct\" href=\"openssl/ec/struct.EcKey.html\" title=\"struct openssl::ec::EcKey\">EcKey</a>","impl <a class=\"trait\" href=\"foreign_types/trait.ForeignType.html\" title=\"trait foreign_types::ForeignType\">ForeignType</a> for <a class=\"struct\" href=\"openssl/ec/struct.EcKeyBuilder.html\" title=\"struct openssl::ec::EcKeyBuilder\">EcKeyBuilder</a>","impl <a class=\"trait\" href=\"foreign_types/trait.ForeignType.html\" title=\"trait foreign_types::ForeignType\">ForeignType</a> for <a class=\"struct\" href=\"openssl/ocsp/struct.OcspBasicResponse.html\" title=\"struct openssl::ocsp::OcspBasicResponse\">OcspBasicResponse</a>","impl <a class=\"trait\" href=\"foreign_types/trait.ForeignType.html\" title=\"trait foreign_types::ForeignType\">ForeignType</a> for <a class=\"struct\" href=\"openssl/ocsp/struct.OcspCertId.html\" title=\"struct openssl::ocsp::OcspCertId\">OcspCertId</a>","impl <a class=\"trait\" href=\"foreign_types/trait.ForeignType.html\" title=\"trait foreign_types::ForeignType\">ForeignType</a> for <a class=\"struct\" href=\"openssl/ocsp/struct.OcspResponse.html\" title=\"struct openssl::ocsp::OcspResponse\">OcspResponse</a>","impl <a class=\"trait\" href=\"foreign_types/trait.ForeignType.html\" title=\"trait foreign_types::ForeignType\">ForeignType</a> for <a class=\"struct\" href=\"openssl/ocsp/struct.OcspRequest.html\" title=\"struct openssl::ocsp::OcspRequest\">OcspRequest</a>","impl <a class=\"trait\" href=\"foreign_types/trait.ForeignType.html\" title=\"trait foreign_types::ForeignType\">ForeignType</a> for <a class=\"struct\" href=\"openssl/ocsp/struct.OcspOneReq.html\" title=\"struct openssl::ocsp::OcspOneReq\">OcspOneReq</a>","impl <a class=\"trait\" href=\"foreign_types/trait.ForeignType.html\" title=\"trait foreign_types::ForeignType\">ForeignType</a> for <a class=\"struct\" href=\"openssl/pkcs12/struct.Pkcs12.html\" title=\"struct openssl::pkcs12::Pkcs12\">Pkcs12</a>","impl <a class=\"trait\" href=\"foreign_types/trait.ForeignType.html\" title=\"trait foreign_types::ForeignType\">ForeignType</a> for <a class=\"struct\" href=\"openssl/pkey/struct.PKey.html\" title=\"struct openssl::pkey::PKey\">PKey</a>","impl <a class=\"trait\" href=\"foreign_types/trait.ForeignType.html\" title=\"trait foreign_types::ForeignType\">ForeignType</a> for <a class=\"struct\" href=\"openssl/rsa/struct.Rsa.html\" title=\"struct openssl::rsa::Rsa\">Rsa</a>","impl <a class=\"trait\" href=\"foreign_types/trait.ForeignType.html\" title=\"trait foreign_types::ForeignType\">ForeignType</a> for <a class=\"struct\" href=\"openssl/ssl/struct.SslContext.html\" title=\"struct openssl::ssl::SslContext\">SslContext</a>","impl <a class=\"trait\" href=\"foreign_types/trait.ForeignType.html\" title=\"trait foreign_types::ForeignType\">ForeignType</a> for <a class=\"struct\" href=\"openssl/ssl/struct.SslSession.html\" title=\"struct openssl::ssl::SslSession\">SslSession</a>","impl <a class=\"trait\" href=\"foreign_types/trait.ForeignType.html\" title=\"trait foreign_types::ForeignType\">ForeignType</a> for <a class=\"struct\" href=\"openssl/ssl/struct.Ssl.html\" title=\"struct openssl::ssl::Ssl\">Ssl</a>","impl <a class=\"trait\" href=\"foreign_types/trait.ForeignType.html\" title=\"trait foreign_types::ForeignType\">ForeignType</a> for <a class=\"struct\" href=\"openssl/string/struct.OpensslString.html\" title=\"struct openssl::string::OpensslString\">OpensslString</a>","impl <a class=\"trait\" href=\"foreign_types/trait.ForeignType.html\" title=\"trait foreign_types::ForeignType\">ForeignType</a> for <a class=\"struct\" href=\"openssl/x509/store/struct.X509StoreBuilder.html\" title=\"struct openssl::x509::store::X509StoreBuilder\">X509StoreBuilder</a>","impl <a class=\"trait\" href=\"foreign_types/trait.ForeignType.html\" title=\"trait foreign_types::ForeignType\">ForeignType</a> for <a class=\"struct\" href=\"openssl/x509/store/struct.X509Store.html\" title=\"struct openssl::x509::store::X509Store\">X509Store</a>","impl <a class=\"trait\" href=\"foreign_types/trait.ForeignType.html\" title=\"trait foreign_types::ForeignType\">ForeignType</a> for <a class=\"struct\" href=\"openssl/x509/struct.X509StoreContext.html\" title=\"struct openssl::x509::X509StoreContext\">X509StoreContext</a>","impl <a class=\"trait\" href=\"foreign_types/trait.ForeignType.html\" title=\"trait foreign_types::ForeignType\">ForeignType</a> for <a class=\"struct\" href=\"openssl/x509/struct.X509.html\" title=\"struct openssl::x509::X509\">X509</a>","impl <a class=\"trait\" href=\"foreign_types/trait.ForeignType.html\" title=\"trait foreign_types::ForeignType\">ForeignType</a> for <a class=\"struct\" href=\"openssl/x509/struct.X509Extension.html\" title=\"struct openssl::x509::X509Extension\">X509Extension</a>","impl <a class=\"trait\" href=\"foreign_types/trait.ForeignType.html\" title=\"trait foreign_types::ForeignType\">ForeignType</a> for <a class=\"struct\" href=\"openssl/x509/struct.X509Name.html\" title=\"struct openssl::x509::X509Name\">X509Name</a>","impl <a class=\"trait\" href=\"foreign_types/trait.ForeignType.html\" title=\"trait foreign_types::ForeignType\">ForeignType</a> for <a class=\"struct\" href=\"openssl/x509/struct.X509NameEntry.html\" title=\"struct openssl::x509::X509NameEntry\">X509NameEntry</a>","impl <a class=\"trait\" href=\"foreign_types/trait.ForeignType.html\" title=\"trait foreign_types::ForeignType\">ForeignType</a> for <a class=\"struct\" href=\"openssl/x509/struct.X509Req.html\" title=\"struct openssl::x509::X509Req\">X509Req</a>","impl <a class=\"trait\" href=\"foreign_types/trait.ForeignType.html\" title=\"trait foreign_types::ForeignType\">ForeignType</a> for <a class=\"struct\" href=\"openssl/x509/struct.GeneralName.html\" title=\"struct openssl::x509::GeneralName\">GeneralName</a>","impl <a class=\"trait\" href=\"foreign_types/trait.ForeignType.html\" title=\"trait foreign_types::ForeignType\">ForeignType</a> for <a class=\"struct\" href=\"openssl/x509/struct.X509Algorithm.html\" title=\"struct openssl::x509::X509Algorithm\">X509Algorithm</a>",];

            if (window.register_implementors) {
                window.register_implementors(implementors);
            } else {
                window.pending_implementors = implementors;
            }
        
})()
