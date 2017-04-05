;;; Directory Local Variables
;;; For more information see (info "(emacs) Directory Variables")

((nil
  (sgml-basic-offset . 2)
  (js-indent-level . 2)
  (js-switch-indent-offset . 2)
  (js2-basic-offset . 2))
 (compilation-mode
  (compilation-error-regexp-alist quote
                                  (("at .* (\\([_[:alnum:]-/]*.js\\):\\([[:digit:]]+\\):\\([[:digit:]]+\\))$" 1 2 3)))))
